import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlockCreateWithoutDocumentInputSchema } from './BlockCreateWithoutDocumentInputSchema';
import { BlockUncheckedCreateWithoutDocumentInputSchema } from './BlockUncheckedCreateWithoutDocumentInputSchema';
import { BlockCreateOrConnectWithoutDocumentInputSchema } from './BlockCreateOrConnectWithoutDocumentInputSchema';
import { BlockUpsertWithWhereUniqueWithoutDocumentInputSchema } from './BlockUpsertWithWhereUniqueWithoutDocumentInputSchema';
import { BlockCreateManyDocumentInputEnvelopeSchema } from './BlockCreateManyDocumentInputEnvelopeSchema';
import { BlockWhereUniqueInputSchema } from './BlockWhereUniqueInputSchema';
import { BlockUpdateWithWhereUniqueWithoutDocumentInputSchema } from './BlockUpdateWithWhereUniqueWithoutDocumentInputSchema';
import { BlockUpdateManyWithWhereWithoutDocumentInputSchema } from './BlockUpdateManyWithWhereWithoutDocumentInputSchema';
import { BlockScalarWhereInputSchema } from './BlockScalarWhereInputSchema';

export const BlockUpdateManyWithoutDocumentNestedInputSchema: z.ZodType<Prisma.BlockUpdateManyWithoutDocumentNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => BlockCreateWithoutDocumentInputSchema), z.lazy(() => BlockCreateWithoutDocumentInputSchema).array(), z.lazy(() => BlockUncheckedCreateWithoutDocumentInputSchema), z.lazy(() => BlockUncheckedCreateWithoutDocumentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BlockCreateOrConnectWithoutDocumentInputSchema), z.lazy(() => BlockCreateOrConnectWithoutDocumentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BlockUpsertWithWhereUniqueWithoutDocumentInputSchema), z.lazy(() => BlockUpsertWithWhereUniqueWithoutDocumentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BlockCreateManyDocumentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BlockWhereUniqueInputSchema), z.lazy(() => BlockWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BlockWhereUniqueInputSchema), z.lazy(() => BlockWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BlockWhereUniqueInputSchema), z.lazy(() => BlockWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BlockWhereUniqueInputSchema), z.lazy(() => BlockWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BlockUpdateWithWhereUniqueWithoutDocumentInputSchema), z.lazy(() => BlockUpdateWithWhereUniqueWithoutDocumentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BlockUpdateManyWithWhereWithoutDocumentInputSchema), z.lazy(() => BlockUpdateManyWithWhereWithoutDocumentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BlockScalarWhereInputSchema), z.lazy(() => BlockScalarWhereInputSchema).array() ]).optional(),
});

export default BlockUpdateManyWithoutDocumentNestedInputSchema;
