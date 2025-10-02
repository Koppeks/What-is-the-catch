import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const DocumentTriggerScalarWhereInputSchema: z.ZodType<Prisma.DocumentTriggerScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => DocumentTriggerScalarWhereInputSchema), z.lazy(() => DocumentTriggerScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DocumentTriggerScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DocumentTriggerScalarWhereInputSchema), z.lazy(() => DocumentTriggerScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  documentId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  triggerId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  enabled: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  minConfidence: z.union([ z.lazy(() => FloatNullableFilterSchema), z.number() ]).optional().nullable(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
});

export default DocumentTriggerScalarWhereInputSchema;
