import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentWhereInputSchema } from './DocumentWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { EnumDocumentKindNullableFilterSchema } from './EnumDocumentKindNullableFilterSchema';
import { DocumentKindSchema } from './DocumentKindSchema';
import { EnumTypeRequestFilterSchema } from './EnumTypeRequestFilterSchema';
import { TypeRequestSchema } from './TypeRequestSchema';
import { EnumAnalysisStatusFilterSchema } from './EnumAnalysisStatusFilterSchema';
import { AnalysisStatusSchema } from './AnalysisStatusSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BlockListRelationFilterSchema } from './BlockListRelationFilterSchema';
import { AnalysisRunListRelationFilterSchema } from './AnalysisRunListRelationFilterSchema';
import { DocumentTriggerListRelationFilterSchema } from './DocumentTriggerListRelationFilterSchema';

export const DocumentWhereUniqueInputSchema: z.ZodType<Prisma.DocumentWhereUniqueInput> = z.object({
  id: z.cuid(),
})
.and(z.strictObject({
  id: z.cuid().optional(),
  AND: z.union([ z.lazy(() => DocumentWhereInputSchema), z.lazy(() => DocumentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DocumentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DocumentWhereInputSchema), z.lazy(() => DocumentWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  locale: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  kind: z.union([ z.lazy(() => EnumDocumentKindNullableFilterSchema), z.lazy(() => DocumentKindSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => EnumTypeRequestFilterSchema), z.lazy(() => TypeRequestSchema) ]).optional(),
  status: z.union([ z.lazy(() => EnumAnalysisStatusFilterSchema), z.lazy(() => AnalysisStatusSchema) ]).optional(),
  sourceUrl: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  blocks: z.lazy(() => BlockListRelationFilterSchema).optional(),
  runs: z.lazy(() => AnalysisRunListRelationFilterSchema).optional(),
  documentRules: z.lazy(() => DocumentTriggerListRelationFilterSchema).optional(),
}));

export default DocumentWhereUniqueInputSchema;
