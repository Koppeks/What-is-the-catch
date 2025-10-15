import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlockCreateWithoutSectionInputSchema } from './BlockCreateWithoutSectionInputSchema';
import { BlockUncheckedCreateWithoutSectionInputSchema } from './BlockUncheckedCreateWithoutSectionInputSchema';
import { BlockCreateOrConnectWithoutSectionInputSchema } from './BlockCreateOrConnectWithoutSectionInputSchema';
import { BlockCreateManySectionInputEnvelopeSchema } from './BlockCreateManySectionInputEnvelopeSchema';
import { BlockWhereUniqueInputSchema } from './BlockWhereUniqueInputSchema';

export const BlockCreateNestedManyWithoutSectionInputSchema: z.ZodType<Prisma.BlockCreateNestedManyWithoutSectionInput> = z.strictObject({
  create: z.union([ z.lazy(() => BlockCreateWithoutSectionInputSchema), z.lazy(() => BlockCreateWithoutSectionInputSchema).array(), z.lazy(() => BlockUncheckedCreateWithoutSectionInputSchema), z.lazy(() => BlockUncheckedCreateWithoutSectionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BlockCreateOrConnectWithoutSectionInputSchema), z.lazy(() => BlockCreateOrConnectWithoutSectionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BlockCreateManySectionInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BlockWhereUniqueInputSchema), z.lazy(() => BlockWhereUniqueInputSchema).array() ]).optional(),
});

export default BlockCreateNestedManyWithoutSectionInputSchema;
