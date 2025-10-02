import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';

export const TriggerHitScalarWhereInputSchema: z.ZodType<Prisma.TriggerHitScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => TriggerHitScalarWhereInputSchema), z.lazy(() => TriggerHitScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TriggerHitScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TriggerHitScalarWhereInputSchema), z.lazy(() => TriggerHitScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  clauseId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  triggerId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  confidence: z.union([ z.lazy(() => FloatNullableFilterSchema), z.number() ]).optional().nullable(),
  matches: z.lazy(() => JsonNullableFilterSchema).optional(),
});

export default TriggerHitScalarWhereInputSchema;
