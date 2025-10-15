import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlockWhereUniqueInputSchema } from './BlockWhereUniqueInputSchema';
import { BlockCreateWithoutSectionInputSchema } from './BlockCreateWithoutSectionInputSchema';
import { BlockUncheckedCreateWithoutSectionInputSchema } from './BlockUncheckedCreateWithoutSectionInputSchema';

export const BlockCreateOrConnectWithoutSectionInputSchema: z.ZodType<Prisma.BlockCreateOrConnectWithoutSectionInput> = z.strictObject({
  where: z.lazy(() => BlockWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BlockCreateWithoutSectionInputSchema), z.lazy(() => BlockUncheckedCreateWithoutSectionInputSchema) ]),
});

export default BlockCreateOrConnectWithoutSectionInputSchema;
