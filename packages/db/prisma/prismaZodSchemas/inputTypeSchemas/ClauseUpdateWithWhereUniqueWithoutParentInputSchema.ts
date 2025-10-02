import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseWhereUniqueInputSchema } from './ClauseWhereUniqueInputSchema';
import { ClauseUpdateWithoutParentInputSchema } from './ClauseUpdateWithoutParentInputSchema';
import { ClauseUncheckedUpdateWithoutParentInputSchema } from './ClauseUncheckedUpdateWithoutParentInputSchema';

export const ClauseUpdateWithWhereUniqueWithoutParentInputSchema: z.ZodType<Prisma.ClauseUpdateWithWhereUniqueWithoutParentInput> = z.strictObject({
  where: z.lazy(() => ClauseWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ClauseUpdateWithoutParentInputSchema), z.lazy(() => ClauseUncheckedUpdateWithoutParentInputSchema) ]),
});

export default ClauseUpdateWithWhereUniqueWithoutParentInputSchema;
