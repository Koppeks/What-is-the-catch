import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DocumentScalarRelationFilterSchema } from './DocumentScalarRelationFilterSchema';
import { DocumentWhereInputSchema } from './DocumentWhereInputSchema';
import { SectionNullableScalarRelationFilterSchema } from './SectionNullableScalarRelationFilterSchema';
import { SectionListRelationFilterSchema } from './SectionListRelationFilterSchema';
import { BlockListRelationFilterSchema } from './BlockListRelationFilterSchema';

export const SectionWhereInputSchema: z.ZodType<Prisma.SectionWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => SectionWhereInputSchema), z.lazy(() => SectionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SectionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SectionWhereInputSchema), z.lazy(() => SectionWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  documentId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  parentId: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  level: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  ordinalPath: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  headingText: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  headingHtml: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  headingAnchor: z.lazy(() => JsonNullableFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  document: z.union([ z.lazy(() => DocumentScalarRelationFilterSchema), z.lazy(() => DocumentWhereInputSchema) ]).optional(),
  parent: z.union([ z.lazy(() => SectionNullableScalarRelationFilterSchema), z.lazy(() => SectionWhereInputSchema) ]).optional().nullable(),
  children: z.lazy(() => SectionListRelationFilterSchema).optional(),
  Block: z.lazy(() => BlockListRelationFilterSchema).optional(),
});

export default SectionWhereInputSchema;
