import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlockCreateWithoutSectionInputSchema } from './BlockCreateWithoutSectionInputSchema';
import { BlockUncheckedCreateWithoutSectionInputSchema } from './BlockUncheckedCreateWithoutSectionInputSchema';
import { BlockCreateOrConnectWithoutSectionInputSchema } from './BlockCreateOrConnectWithoutSectionInputSchema';
import { BlockUpsertWithWhereUniqueWithoutSectionInputSchema } from './BlockUpsertWithWhereUniqueWithoutSectionInputSchema';
import { BlockCreateManySectionInputEnvelopeSchema } from './BlockCreateManySectionInputEnvelopeSchema';
import { BlockWhereUniqueInputSchema } from './BlockWhereUniqueInputSchema';
import { BlockUpdateWithWhereUniqueWithoutSectionInputSchema } from './BlockUpdateWithWhereUniqueWithoutSectionInputSchema';
import { BlockUpdateManyWithWhereWithoutSectionInputSchema } from './BlockUpdateManyWithWhereWithoutSectionInputSchema';
import { BlockScalarWhereInputSchema } from './BlockScalarWhereInputSchema';

export const BlockUncheckedUpdateManyWithoutSectionNestedInputSchema: z.ZodType<Prisma.BlockUncheckedUpdateManyWithoutSectionNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => BlockCreateWithoutSectionInputSchema), z.lazy(() => BlockCreateWithoutSectionInputSchema).array(), z.lazy(() => BlockUncheckedCreateWithoutSectionInputSchema), z.lazy(() => BlockUncheckedCreateWithoutSectionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BlockCreateOrConnectWithoutSectionInputSchema), z.lazy(() => BlockCreateOrConnectWithoutSectionInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BlockUpsertWithWhereUniqueWithoutSectionInputSchema), z.lazy(() => BlockUpsertWithWhereUniqueWithoutSectionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BlockCreateManySectionInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BlockWhereUniqueInputSchema), z.lazy(() => BlockWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BlockWhereUniqueInputSchema), z.lazy(() => BlockWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BlockWhereUniqueInputSchema), z.lazy(() => BlockWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BlockWhereUniqueInputSchema), z.lazy(() => BlockWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BlockUpdateWithWhereUniqueWithoutSectionInputSchema), z.lazy(() => BlockUpdateWithWhereUniqueWithoutSectionInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BlockUpdateManyWithWhereWithoutSectionInputSchema), z.lazy(() => BlockUpdateManyWithWhereWithoutSectionInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BlockScalarWhereInputSchema), z.lazy(() => BlockScalarWhereInputSchema).array() ]).optional(),
});

export default BlockUncheckedUpdateManyWithoutSectionNestedInputSchema;
