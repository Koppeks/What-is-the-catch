import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseWhereUniqueInputSchema } from './ClauseWhereUniqueInputSchema';
import { ClauseCreateWithoutParentInputSchema } from './ClauseCreateWithoutParentInputSchema';
import { ClauseUncheckedCreateWithoutParentInputSchema } from './ClauseUncheckedCreateWithoutParentInputSchema';

export const ClauseCreateOrConnectWithoutParentInputSchema: z.ZodType<Prisma.ClauseCreateOrConnectWithoutParentInput> = z.strictObject({
  where: z.lazy(() => ClauseWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ClauseCreateWithoutParentInputSchema), z.lazy(() => ClauseUncheckedCreateWithoutParentInputSchema) ]),
});

export default ClauseCreateOrConnectWithoutParentInputSchema;
