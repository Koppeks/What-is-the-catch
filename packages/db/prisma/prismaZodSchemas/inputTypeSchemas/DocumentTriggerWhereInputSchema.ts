import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DocumentScalarRelationFilterSchema } from './DocumentScalarRelationFilterSchema';
import { DocumentWhereInputSchema } from './DocumentWhereInputSchema';
import { TriggerScalarRelationFilterSchema } from './TriggerScalarRelationFilterSchema';
import { TriggerWhereInputSchema } from './TriggerWhereInputSchema';

export const DocumentTriggerWhereInputSchema: z.ZodType<Prisma.DocumentTriggerWhereInput> = z.object({
  AND: z.union([ z.lazy(() => DocumentTriggerWhereInputSchema),z.lazy(() => DocumentTriggerWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DocumentTriggerWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DocumentTriggerWhereInputSchema),z.lazy(() => DocumentTriggerWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  documentId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  triggerId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  enabled: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  minConfidence: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  document: z.union([ z.lazy(() => DocumentScalarRelationFilterSchema),z.lazy(() => DocumentWhereInputSchema) ]).optional(),
  trigger: z.union([ z.lazy(() => TriggerScalarRelationFilterSchema),z.lazy(() => TriggerWhereInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.DocumentTriggerWhereInput>;

export default DocumentTriggerWhereInputSchema;
