import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlockWhereUniqueInputSchema } from './BlockWhereUniqueInputSchema';
import { BlockCreateWithoutParentInputSchema } from './BlockCreateWithoutParentInputSchema';
import { BlockUncheckedCreateWithoutParentInputSchema } from './BlockUncheckedCreateWithoutParentInputSchema';

export const BlockCreateOrConnectWithoutParentInputSchema: z.ZodType<Prisma.BlockCreateOrConnectWithoutParentInput> = z.strictObject({
  where: z.lazy(() => BlockWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BlockCreateWithoutParentInputSchema), z.lazy(() => BlockUncheckedCreateWithoutParentInputSchema) ]),
});

export default BlockCreateOrConnectWithoutParentInputSchema;
